/**
 * QUAD WISE TECHNOLOGIES (QWT.AE) - SOVEREIGN AUTH & MULTI-USER ACCESS CONTROLLER
 * Enterprise Role-Based Access Control (RBAC), session management, and multi-user provisioning
 */

(function () {
  const USERS_STORAGE_KEY = 'qwt_admin_users';
  const SESSION_STORAGE_KEY = 'qwt_admin_session';

  // Pre-seeded sovereign default accounts
  const DEFAULT_ACCOUNTS = [
    {
      id: 'USR-GENESIS-01',
      fullName: 'Sovereign Super Admin',
      email: 'admin@qwt.ae',
      password: 'admin',
      role: 'SUPER_ADMIN',
      roleLabel: 'Super Admin',
      status: 'ACTIVE',
      createdAt: '2026-01-01T00:00:00Z',
      lastLogin: '2026-11-10T15:00:00Z',
      createdBy: 'Genesis System'
    },
    {
      id: 'USR-OPS-02',
      fullName: 'Tariq Mansoor (Operations Lead)',
      email: 'tariq@qwt.ae',
      password: 'admin',
      role: 'OPS_ADMIN',
      roleLabel: 'Operations Admin',
      status: 'ACTIVE',
      createdAt: '2026-02-15T09:30:00Z',
      lastLogin: '2026-11-09T18:20:00Z',
      createdBy: 'admin@qwt.ae'
    },
    {
      id: 'USR-TRIAGE-03',
      fullName: 'Noor Al-Hashemi (Triage Officer)',
      email: 'noor@qwt.ae',
      password: 'admin',
      role: 'TRIAGE_OFFICER',
      roleLabel: 'Triage Officer',
      status: 'ACTIVE',
      createdAt: '2026-03-20T11:00:00Z',
      lastLogin: '2026-11-08T14:15:00Z',
      createdBy: 'admin@qwt.ae'
    }
  ];

  class AuthManager {
    constructor() {
      this.ensureStorageInitialized();
      this.currentUser = this.getSessionUser();
      this.init();
    }

    ensureStorageInitialized() {
      try {
        const stored = localStorage.getItem(USERS_STORAGE_KEY);
        if (!stored) {
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
        }
      } catch (e) {
        console.warn('Storage init fallback:', e);
      }
    }

    getUsers() {
      try {
        const raw = localStorage.getItem(USERS_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.error('Failed reading users storage:', e);
      }
      return DEFAULT_ACCOUNTS;
    }

    saveUsers(users) {
      try {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      } catch (e) {
        console.error('Failed saving users storage:', e);
      }
    }

    getSessionUser() {
      try {
        // Check session storage first, then local storage (if "remember me" checked)
        const sessionRaw = sessionStorage.getItem(SESSION_STORAGE_KEY) || localStorage.getItem(SESSION_STORAGE_KEY);
        if (sessionRaw) {
          return JSON.parse(sessionRaw);
        }
      } catch (e) {
        console.warn('Failed reading session:', e);
      }
      return null;
    }

    setSessionUser(user, remember) {
      const sessionData = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        roleLabel: user.roleLabel,
        loginTime: new Date().toISOString()
      };
      this.currentUser = sessionData;
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
      if (remember) {
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
      }
    }

    clearSession() {
      this.currentUser = null;
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }

    init() {
      this.cacheDom();
      this.bindEvents();
      this.checkAuthState();
    }

    cacheDom() {
      // Screens
      this.loginScreen = document.getElementById('admin-login-screen');
      this.appScreen = document.getElementById('admin-authenticated-app');

      // Login form
      this.loginForm = document.getElementById('admin-login-form');
      this.inputEmail = document.getElementById('login-email');
      this.inputPassword = document.getElementById('login-password');
      this.checkboxRemember = document.getElementById('login-remember');
      this.btnTogglePassword = document.getElementById('toggle-password-btn');
      this.iconTogglePassword = document.getElementById('toggle-password-icon');
      this.errorBanner = document.getElementById('login-error-banner');
      this.errorText = document.getElementById('login-error-text');

      // Header auth elements
      this.badgeUserName = document.getElementById('auth-user-name');
      this.badgeUserRole = document.getElementById('auth-user-role');
      this.btnLogout = document.getElementById('admin-logout-btn');
      this.btnMobileLogout = document.getElementById('admin-mobile-logout-btn');

      // User Management DOM elements
      this.tabUsers = document.getElementById('admin-tab-users');
      this.viewUsers = document.getElementById('admin-view-users');
      this.usersTableBody = document.getElementById('users-table-body');
      this.btnOpenCreateModal = document.getElementById('btn-open-create-user-modal');

      // Create User Modal
      this.createModal = document.getElementById('user-create-modal');
      this.createForm = document.getElementById('user-create-form');
      this.btnCloseCreateModal = document.getElementById('btn-close-create-user-modal');
      this.btnCancelCreateModal = document.getElementById('btn-cancel-create-user-modal');
      this.btnGeneratePassword = document.getElementById('btn-generate-password');
      this.inputCreatePassword = document.getElementById('new-user-password');

      // Edit User Modal
      this.editModal = document.getElementById('user-edit-modal');
      this.editForm = document.getElementById('user-edit-form');
      this.btnCloseEditModal = document.getElementById('btn-close-edit-user-modal');
      this.btnCancelEditModal = document.getElementById('btn-cancel-edit-user-modal');

      // KPI counters
      this.kpiTotalUsers = document.getElementById('kpi-total-users');
      this.kpiSuperAdmins = document.getElementById('kpi-super-admins');
      this.kpiOpsStaff = document.getElementById('kpi-ops-staff');
      this.kpiActiveRatio = document.getElementById('kpi-active-ratio');
    }

    bindEvents() {
      // 1. Login Form Submit
      if (this.loginForm) {
        this.loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleLogin();
        });
      }

      // 2. Toggle password visibility
      if (this.btnTogglePassword && this.inputPassword) {
        this.btnTogglePassword.addEventListener('click', () => {
          const isPassword = this.inputPassword.type === 'password';
          this.inputPassword.type = isPassword ? 'text' : 'password';
          if (this.iconTogglePassword) {
            this.iconTogglePassword.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
            if (window.lucide) window.lucide.createIcons();
          }
        });
      }

      // 3. Logout buttons
      const handleLogout = () => {
        if (confirm('Terminate secure sovereign session and sign out?')) {
          this.clearSession();
          this.checkAuthState();
          if (window.qwtToast) window.qwtToast('Signed out of sovereign console.', 'info');
        }
      };

      if (this.btnLogout) this.btnLogout.addEventListener('click', handleLogout);
      if (this.btnMobileLogout) this.btnMobileLogout.addEventListener('click', handleLogout);

      // 4. Create User Modal Open/Close
      if (this.btnOpenCreateModal) {
        this.btnOpenCreateModal.addEventListener('click', () => this.openCreateModal());
      }
      if (this.btnCloseCreateModal) {
        this.btnCloseCreateModal.addEventListener('click', () => this.closeCreateModal());
      }
      if (this.btnCancelCreateModal) {
        this.btnCancelCreateModal.addEventListener('click', () => this.closeCreateModal());
      }

      // 5. Generate Password helper
      if (this.btnGeneratePassword && this.inputCreatePassword) {
        this.btnGeneratePassword.addEventListener('click', () => {
          const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
          let gen = 'QWT#';
          for (let i = 0; i < 8; i++) {
            gen += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          this.inputCreatePassword.value = gen;
          this.inputCreatePassword.type = 'text';
          if (window.qwtToast) window.qwtToast(`Generated secure password: ${gen}`, 'info');
        });
      }

      // 6. Create User Form Submit
      if (this.createForm) {
        this.createForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleCreateUser();
        });
      }

      // 7. Edit User Modal Close
      if (this.btnCloseEditModal) {
        this.btnCloseEditModal.addEventListener('click', () => this.closeEditModal());
      }
      if (this.btnCancelEditModal) {
        this.btnCancelEditModal.addEventListener('click', () => this.closeEditModal());
      }

      // 8. Edit User Form Submit
      if (this.editForm) {
        this.editForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleEditUser();
        });
      }
    }

    checkAuthState() {
      this.currentUser = this.getSessionUser();

      if (!this.currentUser) {
        // Show Login Screen, Hide App
        if (this.loginScreen) {
          this.loginScreen.classList.remove('hidden');
          this.loginScreen.style.display = 'flex';
        }
        if (this.appScreen) {
          this.appScreen.classList.add('hidden');
          this.appScreen.style.display = 'none';
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // User Authenticated: Show App, Hide Login
        if (this.loginScreen) {
          this.loginScreen.classList.add('hidden');
          this.loginScreen.style.display = 'none';
        }
        if (this.appScreen) {
          this.appScreen.classList.remove('hidden');
          this.appScreen.style.display = 'block';
        }
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Update header user profile display
        if (this.badgeUserName) this.badgeUserName.textContent = this.currentUser.fullName;
        if (this.badgeUserRole) {
          this.badgeUserRole.textContent = this.currentUser.roleLabel.toUpperCase();
          if (this.currentUser.role === 'SUPER_ADMIN') {
            this.badgeUserRole.className = 'px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[9px] uppercase font-bold';
          } else {
            this.badgeUserRole.className = 'px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[9px] uppercase font-bold';
          }
        }

        // Render Users Management Table & KPIs
        this.renderUsersTable();
        this.updateKpiCards();
      }

      if (window.lucide) window.lucide.createIcons();
    }

    handleLogin() {
      const email = this.inputEmail ? this.inputEmail.value.trim().toLowerCase() : '';
      const password = this.inputPassword ? this.inputPassword.value.trim() : '';
      const remember = this.checkboxRemember ? this.checkboxRemember.checked : false;

      this.hideError();

      if (!email || !password) {
        this.showError('Please enter both corporate email and security passcode.');
        return;
      }

      const users = this.getUsers();
      const matchedUser = users.find(u => u.email.toLowerCase() === email);

      if (!matchedUser || matchedUser.password !== password) {
        this.showError('Access Denied: Invalid corporate credentials. Incident logged.');
        return;
      }

      if (matchedUser.status === 'SUSPENDED') {
        this.showError('Account Suspended: Contact the Super Admin to restore access privileges.');
        return;
      }

      // Update last login
      matchedUser.lastLogin = new Date().toISOString();
      this.saveUsers(users);

      // Establish session
      this.setSessionUser(matchedUser, remember);
      this.checkAuthState();

      if (window.qwtToast) {
        window.qwtToast(`Authenticated as ${matchedUser.fullName} (${matchedUser.roleLabel})`, 'success');
      }
    }

    showError(msg) {
      if (this.errorBanner && this.errorText) {
        this.errorText.textContent = msg;
        this.errorBanner.classList.remove('hidden');
      }
      if (window.lucide) window.lucide.createIcons();
    }

    hideError() {
      if (this.errorBanner) this.errorBanner.classList.add('hidden');
    }

    quickFill(email, password) {
      if (this.inputEmail) this.inputEmail.value = email;
      if (this.inputPassword) this.inputPassword.value = password;
      this.hideError();
      if (window.qwtToast) window.qwtToast(`Credentials pre-filled for ${email}`, 'info');
    }

    /* --------------------------------------------------------------------------
       USER MANAGEMENT LOGIC (SUPER ADMIN EXCLUSIVE)
       -------------------------------------------------------------------------- */
    isSuperAdmin() {
      return this.currentUser && this.currentUser.role === 'SUPER_ADMIN';
    }

    openCreateModal() {
      if (!this.isSuperAdmin()) {
        if (window.qwtToast) window.qwtToast('Super Admin privileges required to provision new operators.', 'error');
        return;
      }
      if (this.createModal) {
        this.createForm.reset();
        this.createModal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    }

    closeCreateModal() {
      if (this.createModal) this.createModal.classList.add('hidden');
    }

    handleCreateUser() {
      if (!this.isSuperAdmin()) {
        alert('Unauthorized: Only Super Admins can create new user accounts.');
        return;
      }

      const fullName = document.getElementById('new-user-fullname').value.trim();
      const email = document.getElementById('new-user-email').value.trim().toLowerCase();
      const password = document.getElementById('new-user-password').value.trim();
      const roleSelect = document.getElementById('new-user-role');
      const role = roleSelect.value;
      const roleLabel = roleSelect.options[roleSelect.selectedIndex].text.split('(')[0].trim();
      const status = document.getElementById('new-user-status').value;

      if (!fullName || !email || !password) {
        alert('Please fill out all required fields.');
        return;
      }

      const users = this.getUsers();
      if (users.some(u => u.email.toLowerCase() === email)) {
        alert(`A user with email ${email} already exists.`);
        return;
      }

      const newUser = {
        id: 'USR-' + Math.floor(100000 + Math.random() * 900000),
        fullName: fullName,
        email: email,
        password: password,
        role: role,
        roleLabel: roleLabel,
        status: status,
        createdAt: new Date().toISOString(),
        lastLogin: 'Never',
        createdBy: this.currentUser.email
      };

      users.unshift(newUser);
      this.saveUsers(users);

      this.closeCreateModal();
      this.renderUsersTable();
      this.updateKpiCards();

      if (window.qwtToast) {
        window.qwtToast(`Operator ${fullName} provisioned successfully with role ${roleLabel}!`, 'success');
      }
    }

    openEditModal(userId) {
      if (!this.isSuperAdmin()) {
        if (window.qwtToast) window.qwtToast('Super Admin privileges required to modify operator accounts.', 'error');
        return;
      }

      const users = this.getUsers();
      const user = users.find(u => u.id === userId);
      if (!user) return;

      document.getElementById('edit-user-id').value = user.id;
      document.getElementById('edit-user-fullname').value = user.fullName;
      document.getElementById('edit-user-email').value = user.email;
      document.getElementById('edit-user-password').value = ''; // empty unless changing
      document.getElementById('edit-user-role').value = user.role;
      document.getElementById('edit-user-status').value = user.status;

      if (this.editModal) {
        this.editModal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    }

    closeEditModal() {
      if (this.editModal) this.editModal.classList.add('hidden');
    }

    handleEditUser() {
      const userId = document.getElementById('edit-user-id').value;
      const fullName = document.getElementById('edit-user-fullname').value.trim();
      const password = document.getElementById('edit-user-password').value.trim();
      const roleSelect = document.getElementById('edit-user-role');
      const role = roleSelect.value;
      const roleLabel = roleSelect.options[roleSelect.selectedIndex].text.split('(')[0].trim();
      const status = document.getElementById('edit-user-status').value;

      const users = this.getUsers();
      const user = users.find(u => u.id === userId);
      if (!user) return;

      // Prevent Super Admin from demoting themselves or suspending themselves
      if (user.id === this.currentUser.id && status === 'SUSPENDED') {
        alert('Security rule: You cannot suspend your own active session account.');
        return;
      }

      user.fullName = fullName;
      user.role = role;
      user.roleLabel = roleLabel;
      user.status = status;
      if (password) {
        user.password = password;
      }

      this.saveUsers(users);

      // If editing current session user, update session as well
      if (user.id === this.currentUser.id) {
        this.setSessionUser(user, true);
        if (this.badgeUserName) this.badgeUserName.textContent = user.fullName;
        if (this.badgeUserRole) this.badgeUserRole.textContent = user.roleLabel.toUpperCase();
      }

      this.closeEditModal();
      this.renderUsersTable();
      this.updateKpiCards();

      if (window.qwtToast) {
        window.qwtToast(`User account ${fullName} updated successfully.`, 'success');
      }
    }

    toggleUserStatus(userId) {
      if (!this.isSuperAdmin()) {
        if (window.qwtToast) window.qwtToast('Super Admin privileges required.', 'error');
        return;
      }

      const users = this.getUsers();
      const user = users.find(u => u.id === userId);
      if (!user) return;

      if (user.id === this.currentUser.id) {
        alert('Security check: You cannot suspend your own Super Admin account while logged in.');
        return;
      }

      user.status = user.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
      this.saveUsers(users);
      this.renderUsersTable();
      this.updateKpiCards();

      if (window.qwtToast) {
        window.qwtToast(`Account ${user.fullName} is now ${user.status}.`, 'info');
      }
    }

    deleteUser(userId) {
      if (!this.isSuperAdmin()) {
        if (window.qwtToast) window.qwtToast('Super Admin privileges required to delete accounts.', 'error');
        return;
      }

      const users = this.getUsers();
      const user = users.find(u => u.id === userId);
      if (!user) return;

      if (user.id === this.currentUser.id) {
        alert('Action Prohibited: You cannot delete your currently active Super Admin account.');
        return;
      }

      const superAdmins = users.filter(u => u.role === 'SUPER_ADMIN');
      if (user.role === 'SUPER_ADMIN' && superAdmins.length <= 1) {
        alert('Action Prohibited: At least one Super Admin must remain in the sovereign directory.');
        return;
      }

      if (confirm(`Permanently revoke access and delete operator ${user.fullName} (${user.email})?`)) {
        const filtered = users.filter(u => u.id !== userId);
        this.saveUsers(filtered);
        this.renderUsersTable();
        this.updateKpiCards();
        if (window.qwtToast) {
          window.qwtToast(`Operator ${user.fullName} deleted permanently.`, 'warning');
        }
      }
    }

    renderUsersTable() {
      if (!this.usersTableBody) return;

      const users = this.getUsers();
      const isSuperAdmin = this.isSuperAdmin();

      if (!users.length) {
        this.usersTableBody.innerHTML = `
          <tr>
            <td colspan="6" class="py-12 text-center text-slate-500 font-mono">
              No operator accounts provisioned.
            </td>
          </tr>
        `;
        return;
      }

      this.usersTableBody.innerHTML = users.map(user => {
        const isCurrent = this.currentUser && user.id === this.currentUser.id;

        // Role styling
        const roleBadge = user.role === 'SUPER_ADMIN'
          ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1 w-fit"><i data-lucide="shield" class="w-3 h-3"></i> SUPER ADMIN</span>`
          : user.role === 'OPS_ADMIN'
          ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1 w-fit"><i data-lucide="cpu" class="w-3 h-3"></i> OPERATIONS ADMIN</span>`
          : user.role === 'TRIAGE_OFFICER'
          ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-[#C9A24D] border border-amber-500/30 flex items-center gap-1 w-fit"><i data-lucide="inbox" class="w-3 h-3"></i> TRIAGE OFFICER</span>`
          : `<span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 w-fit"><i data-lucide="newspaper" class="w-3 h-3"></i> CONTENT EDITOR</span>`;

        // Status styling
        const statusBadge = user.status === 'ACTIVE'
          ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 w-fit"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ACTIVE</span>`
          : `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30 flex items-center gap-1 w-fit"><span class="w-1.5 h-1.5 rounded-full bg-red-400"></span> SUSPENDED</span>`;

        // Avatar initials
        const initials = user.fullName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

        // Format dates
        let lastLoginStr = user.lastLogin;
        if (user.lastLogin && user.lastLogin !== 'Never') {
          try {
            const d = new Date(user.lastLogin);
            lastLoginStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } catch(e) {}
        }

        // Action buttons (only Super Admin can manage)
        let actionsHtml = '';
        if (isSuperAdmin) {
          if (isCurrent) {
            actionsHtml = `<span class="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 font-mono text-[10px]">Your Current Session</span>`;
          } else {
            actionsHtml = `
              <div class="flex items-center justify-end gap-1.5">
                <button onclick="window.qwtAuth.openEditModal('${user.id}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-[#C9A24D] hover:text-black text-slate-300 transition-colors" title="Edit Role & Details">
                  <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="window.qwtAuth.toggleUserStatus('${user.id}')" class="p-1.5 rounded-lg ${user.status === 'ACTIVE' ? 'bg-amber-500/10 hover:bg-amber-500/20 text-[#C9A24D]' : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400'} transition-colors" title="${user.status === 'ACTIVE' ? 'Suspend Account' : 'Reactivate Account'}">
                  <i data-lucide="${user.status === 'ACTIVE' ? 'user-x' : 'user-check'}" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="window.qwtAuth.deleteUser('${user.id}')" class="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors" title="Delete Operator">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            `;
          }
        } else {
          actionsHtml = `<span class="text-slate-500 font-mono text-[10px]">View Only</span>`;
        }

        return `
          <tr class="border-b border-slate-800/60 hover:bg-slate-800/20 transition-colors">
            <td class="py-3 px-4">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-[#C9A24D] shrink-0">
                  ${initials}
                </div>
                <div>
                  <div class="text-white font-semibold flex items-center gap-2">
                    <span>${user.fullName}</span>
                    ${isCurrent ? '<span class="text-[9px] font-mono text-[#C9A24D] font-bold">[YOU]</span>' : ''}
                  </div>
                  <div class="text-xs text-slate-400 font-mono">${user.email}</div>
                </div>
              </div>
            </td>
            <td class="py-3 px-4">${roleBadge}</td>
            <td class="py-3 px-4">${statusBadge}</td>
            <td class="py-3 px-4 font-mono text-xs text-slate-400">${lastLoginStr}</td>
            <td class="py-3 px-4 font-mono text-xs text-slate-400">${user.createdBy || 'System'}</td>
            <td class="py-3 px-4 text-right">${actionsHtml}</td>
          </tr>
        `;
      }).join('');

      if (window.lucide) window.lucide.createIcons();
    }

    updateKpiCards() {
      const users = this.getUsers();
      if (this.kpiTotalUsers) this.kpiTotalUsers.textContent = users.length;
      if (this.kpiSuperAdmins) this.kpiSuperAdmins.textContent = users.filter(u => u.role === 'SUPER_ADMIN').length;
      if (this.kpiOpsStaff) this.kpiOpsStaff.textContent = users.filter(u => u.role !== 'SUPER_ADMIN').length;
      if (this.kpiActiveRatio) {
        const activeCount = users.filter(u => u.status === 'ACTIVE').length;
        this.kpiActiveRatio.textContent = `${activeCount}/${users.length} Active`;
      }
    }
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    window.qwtAuth = new AuthManager();
  });
})();

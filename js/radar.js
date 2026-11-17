/**
 * QUAD WISE TECHNOLOGIES - SOVEREIGN MATRIX RADAR TELEMETRY
 * Canvas-driven military/enterprise radar HUD with interactive telemetry nodes
 */

class QwtRadarEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.angle = 0;
    this.speed = 0.022; // Sweep rotation speed
    this.activeNodeIndex = 0;
    this.hoveredNode = null;

    this.nodes = [
      {
        id: 'node-h100',
        name: 'NVIDIA H100 Cluster',
        sub: '64x SXM5 80GB GPU Fabric (DIFC)',
        rRatio: 0.38,
        theta: 0.85,
        status: 'OPTIMAL',
        pingColor: '#C9A24D',
        metric: '3.2 PFLOPS FP8',
        telemetry: 'InfiniBand NDR 400Gb/s | RoCE v2 Low-Jitter'
      },
      {
        id: 'node-sla',
        name: '99.999% Uptime SLA',
        sub: 'Tier-IV Redundant Topology (ADGM)',
        rRatio: 0.65,
        theta: 2.15,
        status: 'VERIFIED',
        pingColor: '#10B981',
        metric: '0.84ms Jitter',
        telemetry: 'Dual Active-Active Substations | N+2 Gens'
      },
      {
        id: 'node-sira',
        name: '31-Day SIRA / MCC CCTV',
        sub: '4K Ultra-HD 120-Day Archival Mesh',
        rRatio: 0.52,
        theta: 4.05,
        status: 'CERTIFIED',
        pingColor: '#C9A24D',
        metric: '4.8 PB Raw VMS',
        telemetry: 'Tamper-Evident SHA-256 Watermarking'
      },
      {
        id: 'node-soc',
        name: 'Air-Gapped SOC / SIEM',
        sub: 'L1-L3 Threat Intercept (DSO Bunker)',
        rRatio: 0.78,
        theta: 5.35,
        status: 'FORTIFIED',
        pingColor: '#10B981',
        metric: 'Zero Exfiltration',
        telemetry: 'NESA & UAE PDPL Isolation Enclave'
      },
      {
        id: 'node-pure',
        name: 'Pure FlashBlade //S500',
        sub: 'All-QLC DirectFlash AI Fabric',
        rRatio: 0.25,
        theta: 3.4,
        status: 'ONLINE',
        pingColor: '#C9A24D',
        metric: '48 GB/s Read',
        telemetry: 'SafeMode Immutability Ransomware Lock'
      }
    ];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.setupInteractivity();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width;
    this.height = Math.max(380, Math.min(rect.width, 520));
    
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    
    this.ctx.scale(dpr, dpr);
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.maxRadius = Math.min(this.centerX, this.centerY) * 0.88;
  }

  setupInteractivity() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = null;
      for (const node of this.nodes) {
        const nx = this.centerX + Math.cos(node.theta) * (this.maxRadius * node.rRatio);
        const ny = this.centerY + Math.sin(node.theta) * (this.maxRadius * node.rRatio);
        const dist = Math.hypot(mouseX - nx, mouseY - ny);
        if (dist < 18) {
          found = node;
          break;
        }
      }
      this.hoveredNode = found;
      this.canvas.style.cursor = found ? 'pointer' : 'default';
    });

    this.canvas.addEventListener('click', () => {
      if (this.hoveredNode) {
        this.updateActiveCard(this.hoveredNode);
      }
    });
  }

  updateActiveCard(node) {
    const cardTitle = document.getElementById('radar-active-title');
    const cardSub = document.getElementById('radar-active-sub');
    const cardMetric = document.getElementById('radar-active-metric');
    const cardStatus = document.getElementById('radar-active-status');
    const cardTelemetry = document.getElementById('radar-active-telemetry');

    if (cardTitle) cardTitle.textContent = node.name;
    if (cardSub) cardSub.textContent = node.sub;
    if (cardMetric) cardMetric.textContent = node.metric;
    if (cardStatus) {
      cardStatus.textContent = node.status;
      cardStatus.className = `px-2 py-0.5 rounded text-[10px] font-mono tracking-wider ${
        node.status === 'OPTIMAL' || node.status === 'VERIFIED'
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
          : 'bg-[#C9A24D]/10 text-[#C9A24D] border border-[#C9A24D]/30'
      }`;
    }
    if (cardTelemetry) cardTelemetry.textContent = node.telemetry;
  }

  drawGrid() {
    const ctx = this.ctx;
    ctx.save();

    // Range rings
    const rings = [0.25, 0.5, 0.75, 1.0];
    rings.forEach((r, idx) => {
      const currentR = this.maxRadius * r;
      ctx.beginPath();
      ctx.arc(this.centerX, this.centerY, currentR, 0, Math.PI * 2);
      ctx.strokeStyle = idx === rings.length - 1 ? 'rgba(201, 162, 77, 0.35)' : 'rgba(201, 162, 77, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash(idx % 2 === 1 ? [4, 4] : []);
      ctx.stroke();

      // Range text labels
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(201, 162, 77, 0.45)';
      ctx.fillText(`${(r * 500).toFixed(0)} KM`, this.centerX + 6, this.centerY - currentR + 12);
    });

    ctx.setLineDash([]);

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(this.centerX - this.maxRadius, this.centerY);
    ctx.lineTo(this.centerX + this.maxRadius, this.centerY);
    ctx.moveTo(this.centerX, this.centerY - this.maxRadius);
    ctx.lineTo(this.centerX, this.centerY + this.maxRadius);
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.35)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 45-degree diagonal guides
    const diagDist = this.maxRadius * 0.95;
    ctx.beginPath();
    for (let a = Math.PI / 4; a < Math.PI * 2; a += Math.PI / 2) {
      ctx.moveTo(this.centerX, this.centerY);
      ctx.lineTo(this.centerX + Math.cos(a) * diagDist, this.centerY + Math.sin(a) * diagDist);
    }
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.18)';
    ctx.setLineDash([2, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Outer azimuth ticks
    for (let deg = 0; deg < 360; deg += 10) {
      const rad = (deg * Math.PI) / 180;
      const isMajor = deg % 30 === 0;
      const rInner = this.maxRadius - (isMajor ? 8 : 4);
      const rOuter = this.maxRadius;
      
      const x1 = this.centerX + Math.cos(rad) * rInner;
      const y1 = this.centerY + Math.sin(rad) * rInner;
      const x2 = this.centerX + Math.cos(rad) * rOuter;
      const y2 = this.centerY + Math.sin(rad) * rOuter;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = isMajor ? 'rgba(201, 162, 77, 0.4)' : 'rgba(201, 162, 77, 0.15)';
      ctx.lineWidth = isMajor ? 1.5 : 1;
      ctx.stroke();
    }

    ctx.restore();
  }

  drawSweep() {
    const ctx = this.ctx;
    ctx.save();

    // Sweep beam gradient
    const sweepGradient = ctx.createRadialGradient(
      this.centerX,
      this.centerY,
      0,
      this.centerX,
      this.centerY,
      this.maxRadius
    );
    sweepGradient.addColorStop(0, 'rgba(201, 162, 77, 0.4)');
    sweepGradient.addColorStop(1, 'rgba(201, 162, 77, 0.0)');

    // Sector trail
    const trailAngle = 0.55; // ~31 degrees trail
    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY);
    ctx.arc(this.centerX, this.centerY, this.maxRadius, this.angle - trailAngle, this.angle, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(201, 162, 77, 0.08)';
    ctx.fill();

    // Leading sweep line
    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY);
    const endX = this.centerX + Math.cos(this.angle) * this.maxRadius;
    const endY = this.centerY + Math.sin(this.angle) * this.maxRadius;
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'rgba(201, 162, 77, 0.85)';
    ctx.lineWidth = 1.8;
    ctx.shadowColor = '#C9A24D';
    ctx.shadowBlur = 10;
    ctx.stroke();

    ctx.restore();
  }

  drawNodes() {
    const ctx = this.ctx;
    const now = Date.now() / 1000;

    this.nodes.forEach((node, i) => {
      const nx = this.centerX + Math.cos(node.theta) * (this.maxRadius * node.rRatio);
      const ny = this.centerY + Math.sin(node.theta) * (this.maxRadius * node.rRatio);

      // Angle difference to sweep
      let diff = this.angle - node.theta;
      while (diff < 0) diff += Math.PI * 2;
      while (diff >= Math.PI * 2) diff -= Math.PI * 2;

      // Glow intensity based on proximity to sweep beam
      let intensity = 0.3;
      if (diff < 0.8) {
        intensity = 1 - diff / 0.8;
      }

      ctx.save();

      // Outer Ping circle
      const pingR = 8 + (Math.sin(now * 3 + i) + 1) * 4;
      ctx.beginPath();
      ctx.arc(nx, ny, pingR, 0, Math.PI * 2);
      ctx.strokeStyle = node.pingColor;
      ctx.globalAlpha = Math.max(0.15, intensity * 0.8);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core Node dot
      ctx.beginPath();
      ctx.arc(nx, ny, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = node.pingColor;
      ctx.globalAlpha = Math.max(0.6, intensity);
      ctx.shadowColor = node.pingColor;
      ctx.shadowBlur = 12 * intensity;
      ctx.fill();

      // Label
      ctx.font = '10px "Outfit", sans-serif';
      ctx.fillStyle = intensity > 0.6 ? '#FFFFFF' : '#94A3B8';
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.fillText(node.name, nx + 10, ny + 3);

      // Micro telemetry tag
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = '#C9A24D';
      ctx.fillText(node.metric, nx + 10, ny + 14);

      ctx.restore();
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawGrid();
    this.drawSweep();
    this.drawNodes();

    this.angle += this.speed;
    if (this.angle >= Math.PI * 2) {
      this.angle = 0;
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('qwt-radar-canvas')) {
    window.qwtRadar = new QwtRadarEngine('qwt-radar-canvas');
  }
});

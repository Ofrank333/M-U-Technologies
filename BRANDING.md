# M&U Technologies Co Inc — Branding Kit

## Logo
- **Icon**: Hexagonal network topology mark with M-wave path representing connectivity + intelligence
- **Wordmark**: "M&U" in bold gradient, "Technologies" in small-caps tracking
- **Usage**: Full logo (icon + wordmark + descriptor), icon-only, wordmark-only variants

## Color Palette

### Primary — Indigo
| Token | Hex | Usage |
|-------|-----|-------|
| brand-500 | `#6366f1` | Primary CTA buttons, links, accents |
| brand-600 | `#4f46e5` | Button hover states |
| brand-400 | `#818cf8` | Dark mode text accents |
| brand-950 | `#1e1b4b` | Dark backgrounds |

### Accent — Purple
| Token | Hex | Usage |
|-------|-----|-------|
| accent-500 | `#d946ef` | AI/Automation highlights, gradients |
| accent-600 | `#c026d3` | Accent hover |

### Highlight — Cyan
| Token | Hex | Usage |
|-------|-----|-------|
| cyan-500 | `#06b6d4` | Security service color, links |
| cyan-400 | `#22d3ee` | Glow effects |

### Gradient (Brand Signature)
```
linear-gradient(135deg, #6366f1 0%, #d946ef 50%, #06b6d4 100%)
```

### Dark Mode Surfaces
| Token | Hex | Usage |
|-------|-----|-------|
| surface-dark | `#0a0a0f` | Page background |
| surface-dark-card | `#111127` | Card/panel backgrounds |
| surface-dark-border | `#1e1e3a` | Card borders |

## Typography

### Display / Headlines
- **Font**: Inter (Google Fonts)
- **Weights**: 700 (Bold), 800 (ExtraBold) for hero headings
- **Tracking**: `-0.025em` (tight) for headlines

### Body
- **Font**: Inter
- **Weight**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Line height**: 1.6–1.7 for readability

### Code / Technical
- **Font**: JetBrains Mono
- **Usage**: Code blocks, terminal output, technical specs

## Slogan Options
1. **Primary**: *"Intelligent Networks. Unshakeable Security. Infinite Scale."*
2. **Short**: *"Where Networks Think"*
3. **Technical**: *"AI-First Infrastructure for the Modern Enterprise"*
4. **Government/Enterprise**: *"Mission-Critical Networks. Zero Compromise."*

## Voice & Tone
- **Authoritative but approachable**: We're experts who speak plainly
- **Confident**: We back every claim with data
- **Forward-looking**: We're always talking about what's next
- **Precise**: Technical accuracy is non-negotiable

## Key Messaging Pillars
1. **Speed**: 10× faster deployments than traditional methods
2. **Reliability**: 99.9% uptime SLA with proven track record
3. **Intelligence**: AI-powered operations that learn and improve
4. **Security**: Zero Trust by design, not as an afterthought
5. **ROI**: Average payback within 3–6 months

## Deployment
- **Recommended**: Vercel (vercel.json included)
- **Alternative**: AWS Amplify, Netlify, or self-hosted on ECS/Kubernetes
- **CDN**: Vercel Edge Network (included) or CloudFront
- **Analytics**: Add Google Analytics / Plausible via next.config.ts

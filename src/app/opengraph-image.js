import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Augyeris Lioga Seandrio — DevOps Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 40%, #1a2744 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* Initials avatar */}
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              boxShadow: '0 0 40px rgba(59,130,246,0.3)',
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700, color: 'white' }}>
              AL
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: '#f8fafc',
              margin: 0,
              letterSpacing: -1,
              lineHeight: 1.1,
            }}
          >
            Augyeris Lioga Seandrio
          </h1>

          {/* Role badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 12,
              padding: '8px 20px',
              borderRadius: 999,
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#60a5fa',
              }}
            >
              DevOps Engineer
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 18,
              color: '#94a3b8',
              margin: 0,
              marginTop: 20,
              maxWidth: 700,
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            CI/CD · Jenkins · Docker · OpenShift · Kafka · Elastic APM · React
          </p>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: '#475569',
            fontSize: 14,
          }}
        >
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

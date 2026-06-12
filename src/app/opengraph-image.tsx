import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Olimpiada Matemática — Material de élite';
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
          justifyContent: 'space-between',
          background: '#f4ede0',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Integral deco */}
        <div
          style={{
            position: 'absolute',
            right: 40,
            top: -60,
            fontSize: 520,
            color: '#e7dcc8',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
          }}
        >
          ∫
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: '#1a1612',
              color: '#f4ede0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontFamily: 'Georgia, serif',
            }}
          >
            Σ
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#c63d2f',
              fontFamily: 'Georgia, serif',
            }}
          >
            olimpiadamatematica.com
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              color: '#1a1612',
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              letterSpacing: -2,
            }}
          >
            Olimpiada Matemática
          </div>
          <div
            style={{
              fontSize: 38,
              color: '#5a4f3f',
              marginTop: 18,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            Material de élite — teoría, demostraciones y problemas resueltos
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 14,
            fontSize: 26,
            color: '#1a1612',
            fontFamily: 'Georgia, serif',
          }}
        >
          <span>Teoría de Números</span>
          <span style={{ color: '#c63d2f' }}>·</span>
          <span>Geometría</span>
          <span style={{ color: '#c63d2f' }}>·</span>
          <span>Álgebra</span>
          <span style={{ color: '#c63d2f' }}>·</span>
          <span>Combinatoria</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

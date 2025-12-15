import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D0D0D',
          position: 'relative',
        }}
      >
        {/* Bordure dorée */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '1px solid rgba(201, 169, 97, 0.3)',
            display: 'flex',
          }}
        />
        
        {/* Contenu */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* Ornement supérieur */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <div style={{ width: 60, height: 1, backgroundColor: '#C9A961' }} />
            <div
              style={{
                margin: '0 15px',
                fontSize: 24,
                color: '#C9A961',
              }}
            >
              🎬
            </div>
            <div style={{ width: 60, height: 1, backgroundColor: '#C9A961' }} />
          </div>

          {/* Nom */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: '#E8E8E8',
              letterSpacing: '0.15em',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}
          >
            Fabien Trampont
          </div>

          {/* Titre */}
          <div
            style={{
              fontSize: 32,
              color: '#C9A961',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 40,
            }}
          >
            Directeur de Post-Production
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 60,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: '#C9A961', fontWeight: 300 }}>10</div>
              <div style={{ fontSize: 14, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                années
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: '#C9A961', fontWeight: 300 }}>40+</div>
              <div style={{ fontSize: 14, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                films & séries
              </div>
            </div>
          </div>

          {/* Festivals */}
          <div
            style={{
              marginTop: 40,
              fontSize: 16,
              color: '#666',
              letterSpacing: '0.1em',
            }}
          >
            Cannes • Venise • Berlin • Annecy • San Sebastián
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}













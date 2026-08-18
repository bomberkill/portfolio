import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ronald Kamgaing — Fullstack Developer & CTO';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '90px',
                    background: '#0E100F',
                    color: '#EDEBE6',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#6FBFA3', marginRight: 12 }} />
                    <div style={{ fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', color: '#8E908B' }}>
                        Ronald Kamgaing
                    </div>
                </div>
                <div style={{ display: 'flex', fontSize: 60, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
                    Fullstack developer and CTO, building messaging and outreach products.
                </div>
                <div style={{ display: 'flex', fontSize: 24, color: '#8E908B', marginTop: 32 }}>
                    Currently building ReachDem
                </div>
            </div>
        ),
        { ...size }
    );
}

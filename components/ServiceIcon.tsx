export function ServiceIcon({ kind }: { kind: string }) {
 const parts: Record<string, string[]> = {
   siding: ['M5 32h30', 'M5 24h30', 'M5 16h30', 'M5 8h30', 'M12 24v8M28 16v8M12 8v8'],
   roof: ['M9 34h22', 'M9 34V18M31 34V18', 'M3 22 20 7l17 15', 'M16 34V24h8v10'],
   trim: ['M7 34V7', 'M7 7h27', 'M14 34V14h20', 'M7 27h7M27 7v7'],
   window: ['M7 35V5h26v30H7', 'M20 5v30', 'M7 20h26'],
   door: ['M6 35h29', 'M10 35V5h21v30', 'M26 20h1'],
 };
 return <svg className="service-icon" viewBox="0 0 40 40" aria-hidden="true">{(parts[kind] ?? []).map((d, index) => <path className="construction-piece" pathLength="1" d={d} key={d} style={{ '--piece': index } as React.CSSProperties} />)}</svg>;
}

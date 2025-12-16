const Icons = {
  // Trading icons
  Stack: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
      <path d="M2 17L12 22L22 17"/>
      <path d="M2 12L12 17L22 12"/>
    </svg>
  ),

  // Chart icon
  TrendingUp: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 3V21H21"/>
      <path d="M9 9L12 6L16 10L21 5"/>
      <circle cx="9" cy="9" r="1"/>
      <circle cx="12" cy="6" r="1"/>
      <circle cx="16" cy="10" r="1"/>
      <circle cx="21" cy="5" r="1"/>
    </svg>
  ),

  // Copy icon
  Copy: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  ),

  // Check icon
  Check: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  ),

  // External link icon
  ExternalLink: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),

  // Menu icon
  Menu: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),

  // Close icon
  X: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),

  // Lock icon
  Lock: ({ size = 16, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M12 17A2 2 0 0 0 12 13A2 2 0 0 0 12 17Z"/>
    </svg>
  )
}

export default Icons
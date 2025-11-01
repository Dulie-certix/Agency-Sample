# Complete Website Animations Guide

## All Animation Locations (Error-Free)

### 1. Hero Section (Hero.jsx)
**File:** `src/Page/Hero.jsx`

#### Text Animations (Lines 23, 29, 35)
```jsx
// Main heading animation
<p className="animate-fade-in-up delay-200 ...">
  Experienced mobile and web applications...
</p>

// Description animation  
<p className="animate-fade-in-up delay-400 ...">
  KODEX TECHNOLOGY (PVT) LTD is a team...
</p>

// Buttons animation
<div className="animate-fade-in-up delay-600 ...">
  <Button>Contact us</Button>
  <Button>View more</Button>
</div>
```

#### Image Animation (Line 42)
```jsx
// Man image scale animation
<img className="animate-fade-in-scale delay-300 ..." src={man} alt="man" />
```

### 2. Navigation (NavLink.jsx)
**File:** `src/Components/NavLink.jsx`

#### Hover Animation (Line 29)
```jsx
// Navigation link hover effects
const baseClasses = "... hover:scale-110 hover:-translate-y-1";
```

#### Active State (Lines 34-36)
```jsx
// Active indicator dot
{isActive && (
  <div className="... bg-[#08D3BB] rounded-full ..."></div>
)}
```

### 3. Button Component (Button.jsx)
**File:** `src/Components/Button.jsx`

#### Hover Effects (Line 2)
```jsx
// Button hover and active animations
const baseClasses = "... hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0";
```

### 4. Service Items (ServiceItem.jsx)
**File:** `src/Components/ServiceItem.jsx`

#### Hover + CSS Animation (Lines 11-16)
```jsx
// Service card hover effects
<div className="... hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
     style={{
       animation: 'highlight 2s ease-in-out infinite',
       '--glow-color': getGlowColor()
     }}>
```

### 5. Section2 (Section2.jsx) - Framer Motion
**File:** `src/Page/Section2.jsx`

#### Animation Setup (Lines 16-36)
```jsx
// Container animation - staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

// Item animation - fade + slide up
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

#### Main Section Animation (Lines 39-47)
```jsx
// Main section with container animation
<motion.section
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
```

#### Content Sections (Lines 49-127)
```jsx
// Header section
<motion.div variants={itemVariants}>
  <SectionHeader ... />
</motion.div>

// Content sections with individual triggers
<motion.div 
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  <ContentSection image={phone} imageAlt="phone" />
</motion.div>
```

### 6. ContentSection (ContentSection.jsx) - Phone Vibration
**File:** `src/Components/ContentSection.jsx`

#### Phone Vibration Animation
```jsx
// Phone image continuous vibration
<motion.img
  animate={imageAlt === "phone" ? {
    x: [0, -3, 3, -3, 3, 0],  // Horizontal shake ±3px
    y: [0, -2, 2, -2, 2, 0]   // Vertical shake ±2px
  } : {}}
  transition={{
    duration: 1.5,    // 1.5 seconds per cycle
    repeat: Infinity, // Loop forever
    repeatDelay: 2    // 2 second pause between cycles
  }}
/>
```

## Animation Summary by Type

### CSS/Tailwind Animations:
1. **Hero Section:** fade-in-up, fade-in-scale with delays
2. **Navigation:** hover scale and translate effects
3. **Buttons:** hover scale, lift, shadow, and active press
4. **Service Items:** hover effects + continuous highlight glow

### Framer Motion Animations:
1. **Section2:** Scroll-triggered container and item animations
2. **ContentSection:** Phone image continuous vibration

### Interactive Effects:
1. **Smooth Scrolling:** Navigation links scroll to sections
2. **Active States:** Navigation shows current section
3. **Hover States:** All interactive elements have hover feedback

## Animation Timing

### Hero Section:
- Heading: 200ms delay
- Description: 400ms delay  
- Man image: 300ms delay
- Buttons: 600ms delay

### Section2:
- Container: Triggers at 20% visible
- Items: Trigger at 30% visible, 0.6s duration
- Stagger: 0.3s delay between children

### Phone Vibration:
- Cycle: 1.5s animation + 2s pause = 3.5s total
- Pattern: 6-step shake sequence

## Files Modified for Animations

### With Animations:
- `src/Page/Hero.jsx` - CSS animations
- `src/Components/NavLink.jsx` - Hover effects
- `src/Components/Button.jsx` - Hover/active states  
- `src/Components/ServiceItem.jsx` - Hover + highlight
- `src/Page/Section2.jsx` - Framer Motion scroll animations
- `src/Components/ContentSection.jsx` - Phone vibration

### Without Animations (Static):
- `src/Page/Section3.jsx` - Ready for animations
- `src/Page/Section4.jsx` - Ready for animations
- `src/Components/Footer.jsx` - Ready for animations

## Dependencies
- `framer-motion` - For Section2 and ContentSection animations
- Tailwind CSS - For CSS animations and transitions
- Custom CSS - For highlight keyframe animation

## Browser Support
- Modern browsers with CSS transforms and transitions
- Framer Motion provides fallbacks for older browsers
- Hardware acceleration for smooth performance
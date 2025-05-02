✅ Dual Mode Theme Integration — Full Build Plan
🔁 PHASE 1: Add Theme Context (Global Mode Switching)
🛠 Files to Build:
src/context/ThemeContext.tsx

src/components/ModeSwitch.tsx

✅ Steps:
Create a ThemeContext to store and toggle between "hacker" and "friendly" modes.

Store the selected mode in localStorage.

Build ModeSwitch.tsx → toggles current mode.

Add the switch in layout.tsx (top-right corner).

🧱 PHASE 2: Update Layout to Use Context
🔧 File to Edit:
src/app/layout.tsx

✅ Steps:
Wrap children with ThemeProvider.

Inject the font-pixel class based on mode (or load future friendly font).

Include ModeSwitch button in layout.

🏠 PHASE 3: Home Page Conditional Dashboard
🔧 File to Edit:
src/app/home/page.tsx

🛠 File to Create:
src/components/FriendlyDashboard.tsx

✅ Steps:
Import useTheme in home/page.tsx.

Show TerminalUI if mode is "hacker".

Show FriendlyDashboard if mode is "friendly".

🙋 PHASE 4: About Page Conditional Rendering
🔧 File to Edit:
src/app/about/page.tsx

🛠 File to Create:
src/components/AboutBox.tsx

✅ Steps:
Use useTheme.

Render whoami CLI or styled AboutBox with avatar/text.

📁 PHASE 5: Projects Page Theme-Aware Cards
🔧 File to Edit:
src/app/projects/page.tsx

src/components/ProjectCard.tsx

✅ Steps:
Pass theme into ProjectCard.

Inside ProjectCard.tsx, render terminal-style or colorful UI.

📓 PHASE 6: Blog Page (Optional Visual List)
🛠 File to Create (Optional):
src/components/BlogDisk.tsx

✅ Steps:
Optional: Replace CLI preview with visual cards in friendly mode.

Blog post render stays the same (Markdown reader).

📬 PHASE 7: Contact Page Conditional View
🔧 File to Edit:
src/app/contact/page.tsx

🛠 File to Create:
src/components/VisualContactCard.tsx

✅ Steps:
Use useTheme.

Render ASCIIForm or VisualContactCard.

🧪 PHASE 8: Final Polish
✅ Steps:
Sync fonts if adding friendly one

Adjust globals.css if needed

Test mobile & dark compatibility

Add transition animation if switching theme
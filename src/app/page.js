import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import './page.scss';
import "@radix-ui/themes/styles.css";


export default async function HomePage() {
  // Fetch the About Us content from the JSON file
  const aboutContent = await import('./content/about.json');

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="Page">
      {/* Header */}
      <header className="Page-Header Header">
        <div className="Header-HeaderContainer">
          <div className="Header-HeaderLogo">averdem-tech</div>
          <NavigationMenu>
            <NavigationMenuList className="Header-HeaderMenu">
              {sections.map((section) => (
                <NavigationMenuItem key={section.id} className="Header-HeaderMenuItem">
                  <NavigationMenuLink asChild>
                    <a href={`#${section.id}`} className="Header-HeaderMenuLink">
                      {section.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Sections */}
      <div className="Page-Sections">
        {/* About Us Section */}
        <section id="about" className="Section">
          <div className="Section-SectionContainer">
            <h2 className="Section-SectionTitle">{aboutContent.title}</h2>
            <p className="Section-SectionText">{aboutContent.content}</p>
          </div>
        </section>

        {/* Other sections */}
        {sections.slice(1).map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            className={`Section ${index % 2 === 0 ? 'Section_alt' : ''}`}
          >
            <div className="Section-SectionContainer">
              <h2 className="Section-SectionTitle">{section.label}</h2>
              <p className="Section-SectionText">
                This is the {section.label} section. Add your content here.
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="Page-Footer Footer">
        <div className="Footer-FooterContainer">
          <p className="Footer-FooterText">&copy; {new Date().getFullYear()} averdem-tech. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

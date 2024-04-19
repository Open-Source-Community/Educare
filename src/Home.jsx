import Nav from "./Components/nav";
import './assets/stylesheets/home.scss'
import Card from "./Components/heroCard";
import Search from "./Components/search";
import CardContainer from "./Components/cardContainer";

export default function Home() {
  const lessons = [
    {
      imageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30b2ee38a3d11fabb9eb0_Screenshot%202020-05-18%20at%2023.24.03.png',
      category: 'Layout',
      title: 'Layout and structure',
      description: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.Sed dignissim lacinia nunc.',
      authorName: 'Betsy O\'Reilly',
      authorImageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec2f38e200389241be71792_michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      href: '/lesson/layout-and-structure'
    },
    {
      imageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30b2ee38a3d11fabb9eb0_Screenshot%202020-05-18%20at%2023.24.03.png',
      category: 'Layout',
      title: 'Layout and structure',
      description: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.Sed dignissim lacinia nunc.',
      authorName: 'Nigger',
      authorImageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec2f38e200389241be71792_michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      href: '/lesson/layout-and-structure'
    },
    {
      imageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30b2ee38a3d11fabb9eb0_Screenshot%202020-05-18%20at%2023.24.03.png',
      category: 'Layout',
      title: 'Layout and structure',
      description: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.Sed dignissim lacinia nunc.',
      authorName: 'Nigger',
      authorImageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec2f38e200389241be71792_michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      href: '/lesson/layout-and-structure'
    }
    // Add more lesson objects here if needed
  ];
  const imageUrl = 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30a70c48921daff557fff_Screenshot%202020-05-18%20at%2023.21.25-p-800.png';
  
  return (
    <div className="HomeContainer">
      <Nav />
      <div className="content">
        <div className="section">
          <div className="section-title">Recent</div>
            <Card
              imageUrl={imageUrl}
              category="Webflow"
              title="Getting started with Webflow"
              author="Aaron Kautzer"
              description="Quod molestias repellat. Dignissimos soluta deleniti laudantium ab qui sit iste. Veniam debitis ut consequuntur. Nihil quia fugit iure maxime accusantium dolorem recusandae architecto iste."
              link="/lesson/getting-started-with-webflow"
            />
      </div>
      <div className="section">
        <div className="section-title">Lessons</div>
        <CardContainer cardData={lessons} maxCards={3} />
      </div>
      </div>
    </div>
  );
}


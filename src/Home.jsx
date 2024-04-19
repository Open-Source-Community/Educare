import Nav from "./Components/nav";
import './assets/stylesheets/home.scss'
import Card from "./Components/heroCard";
import Search from "./Components/search";
import CardContainer from "./Components/cardContainer";
import HorizontalCardContainer from "./Components/hCardContainer";
import NCardContainer from "./Components/NCardContainer";

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
      authorName: 'AK',
      authorImageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec2f38e200389241be71792_michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      href: '/lesson/layout-and-structure'
    },
    {
      imageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30b2ee38a3d11fabb9eb0_Screenshot%202020-05-18%20at%2023.24.03.png',
      category: 'Layout',
      title: 'Layout and structure',
      description: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.Sed dignissim lacinia nunc.',
      authorName: 'AK',
      authorImageUrl: 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec2f38e200389241be71792_michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      href: '/lesson/layout-and-structure'
    }
    // Add more lesson objects here if needed
  ];
  const staticCardData = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
      link: '/card1-link'
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      title: 'Card 2',
      description: 'Description for Card 2',
      link: '/card2-link'
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      title: 'Card 3',
      description: 'Description for Card 3',
      link: '/card3-link'
    },
    {
      imageUrl: 'https://example.com/image4.jpg',
      title: 'Card 4',
      description: 'Description for Card 4',
      link: '/card4-link'
    },
    {
      imageUrl: 'https://example.com/image5.jpg',
      title: 'Card 5',
      description: 'Description for Card 5',
      link: '/card5-link'
    },
    // Add more cards as needed
  ];
  const imageUrl = 'https://assets-global.website-files.com/5ec0480d4930cd200885acbd/5ec30a70c48921daff557fff_Screenshot%202020-05-18%20at%2023.21.25-p-800.png';
  
  // useEffect(() => {
  //   // Your data fetching logic here
  //   // Example:
  //   const fetchData = async () => {
  //     const response = await fetch('localhost:1337');
  //     const data = await response.json();
  //     setCardData(data);
  //   };
  //   fetchData();
  // }, []);

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
      <div className="section">
        <div className="section-title">Assignments</div>
        <HorizontalCardContainer cardData={staticCardData} maxCards={3}/>
      </div>
      <div className="section">
        <div className="section-title">News</div>
        <NCardContainer cardData={lessons} maxCards={3} />
      </div>
      </div>
    </div>
  );
}


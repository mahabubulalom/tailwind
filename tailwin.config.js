
  tailwind.config = {
    theme: {
      extend: {
        backgroundImage: {
          banner: "url('images/banner.jpg')",
        },
        maxWidth: {
            container: "1170px",
        },
        colors: {
            blue: "#4846e8",
            teya: "#46e850",
            comon: "#d4fae7",
            body: "#e0e7ff",
        },
        fontSize: {
            70: "70px",
            50: "50px",
            30: "30px",
            25: "25px",
        },
        fontFamily: {
          roboto:["'Roboto', sans-serif;"],
          styles:["'Style Script', cursive;"],
        },
        
        screens: {
          '2xl': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'desktop': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'laptop': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'md': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'tablet': {'max': '639px'},
          // => @media (max-width: 639px) { ... }
        }
      }
    }
  }
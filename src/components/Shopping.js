import { useState } from "react";
const Section = ({ title, description,isVisible,setIsVisible }) => {
  
  return (
    <div className="m-2 p-2 border-2 border-black">
      <h2 className="font-bold">{title}</h2>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Less..</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>More..</button>
      )}

      {isVisible ? <p>{description}</p> : ""}
    </div>
  );
};

const Shopping = () => {
    const [visibleSection,setIsVisibleSection]=useState("Tundra")
  return (
    <div>
      <h1 className="m-2 p-2">My Shopping Blog</h1>
      <Section
        title={"Tundra"}
        description={
          "In 2021, Tundra Esports signed the mudgolems roster after they successfully qualified for the DreamLeague Season 14 DPC EU Upper Division in the Dota Pro Circuit (DPC). Under the veteran Fata's leadership, they quickly established themselves as a mid-table Western Europe side in the 2021 DPC season. Continuing to grow, at the close of the season, they finished second in the Western Europe Regional Qualifiers for The International 2021, falling just short of qualifying for the tournament."
        }
        isVisible={visibleSection=== "Tundra"}
        setIsVisible={()=>setIsVisibleSection("Tundra")}
      />
      <Section
        title={"Shopify"}
        description={
          "In 2021, Tundra Esports signed the mudgolems roster after they successfully qualified for the DreamLeague Season 14 DPC EU Upper Division in the Dota Pro Circuit (DPC). Under the veteran Fata's leadership, they quickly established themselves as a mid-table Western Europe side in the 2021 DPC season. Continuing to grow, at the close of the season, they finished second in the Western Europe Regional Qualifiers for The International 2021, falling just short of qualifying for the tournament."
        }
        isVisible={visibleSection=== "Shopify"}
        setIsVisible={()=>setIsVisibleSection("Shopify")}
      />
      <Section
        title={"GG"}
        description={
          "In 2021, Tundra Esports signed the mudgolems roster after they successfully qualified for the DreamLeague Season 14 DPC EU Upper Division in the Dota Pro Circuit (DPC). Under the veteran Fata's leadership, they quickly established themselves as a mid-table Western Europe side in the 2021 DPC season. Continuing to grow, at the close of the season, they finished second in the Western Europe Regional Qualifiers for The International 2021, falling just short of qualifying for the tournament."
        }
        isVisible={visibleSection==="GG"}
        setIsVisible={()=>setIsVisibleSection("GG")}
      />
    </div>
  );
};
export default Shopping;

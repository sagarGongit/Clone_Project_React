function Inspiration(){
    const inspiration = [
       {
          "image" : "https://a.allegroimg.com/original/12aee8/bee44d214b2ab70517066c156780",
          "tag" : "Phones"
      },
      {
        "image" : "https://a.allegroimg.com/original/12055c/310d28db4175baa02c40cecfcbe9",
        "tag" : "Stage, studio & DJ equipment"
    },
    {
        "image" : "https://a.allegroimg.com/original/12f52f/d31c422f42f09cc69b6fb2685445",
        "tag" : "Tv & Video"
    },
    {
        "image" : "https://a.allegroimg.com/original/12633e/0a67b4ba4277bc89bf669db4965a",
        "tag" : "Photography"
    },
    {
        "image" : "https://a.allegroimg.com/original/12fcd6/d052fe8a422b9c6998e7cece577b",
        "tag" : "HouseHold Electronic & Appliance"
    },
    {
        "image" : "https://a.allegroimg.com/original/12bacb/e746e96047899a87575d30b34a1b",
        "tag" : "Computers"
    },
    {
        "image" : "https://a.allegroimg.com/original/12d939/0669fe424cedabf32017a1494dfc",
        "tag" : "Consoles"
    },
   
   ]
     return (
         <>
        <div id="inspiration">
        <div id="insp-head"><h2>Find inspirations</h2>
          <p>in the Electronics category</p></div>
         {inspiration && inspiration.map((inspiration,idx)=>{
              return <div id="insp-card" key={idx}>
                 <img src={inspiration.image} alt="handleimage" id="handle-img"/>
                 <div id="tag-ctn">{inspiration.tag}</div>
              </div>
         })}
        </div>
         </>
     )
 }
 
 export default Inspiration;
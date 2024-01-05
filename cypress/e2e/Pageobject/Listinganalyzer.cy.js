class Listing
{

geturl()
{
    return cy.get(".card_gifContainer__S58C5").each(($e1, index, $list) => {
    if($e1.text().includes("ListingAnalyzer"))
    {
      cy.get(".card_cardDescWrapper__ou0o2").click()
    }
  })
} 




}
export default Listing;
class homepage{

elements ={
               getstarted : () => cy.xpath("//p[@class='d-none d-sm-flex justify-content-center justify-content-sm-start']/a[text()='Get Started']")
    
    
} 
  clickOnGetStarted(){
    this.elements.getstarted().click()
  }
}


    
    
    
    
    
    
    module.exports = new homepage();
    require('cypress-xpath')
describe('', () => {
    it('js', () => {

        let x = 5 ; 
        let y = 7
                
        if(x >= y || x!=4 ){
            // And  
            // false && true = false 
            // true && true = true 
            // OR 
            // false || false = false 
            cy.log("yes")
        }
        else{
            cy.log("NO")
            // cy.visit("https://www.w3schools.com/")
        }
        // x > y ? cy.log("yes") : cy.log("No") 
        // ! ( true ) == false 
        // x < y ? cy.log("Yes") :  !(x=y) ? cy.log("true") : cy.log("false")

    });

    it.only('for', () => {
        let A1 = [1,3,5,7,9]
        // A1.length = 5
        for (let i = (A1.length - 1 ); i >= 0 ; i--) {
          cy.log(A1[i]+=3)
        }
        cy.log("---------")
        // A1 [4,6,8,10,12]

        for (let i = 0; i < A1.length; i++) {
          cy.log(A1[i]+=3)
            
        }

        // A1[7,9,11,13,15]
    });
});
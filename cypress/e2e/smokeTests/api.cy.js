/// <reference types="cypress"/>
describe('API , Http requests', () => {
    it('Request types', () => {
        // method , url , body 
        // GET 
        cy.request('https://jsonplaceholder.typicode.com/posts') 
        cy.request('https://jsonplaceholder.typicode.com/posts/3')

        // POST 
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{'title':"Test","body":"This is test body"})
        
        // DELETE 
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/5')

        // PUT 
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/4')

        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/4',{'title':"Test","body":"This is test body"})
        
    });

    // api testing 
    it('check api works successfully', () => {
        cy.request('https://jsonplaceholder.typicode.com/users/3').then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.contain("Clementine Bauch")
            expect(response.body.email).to.eq("Nathan@yesenia.net")
            expect(response.body.address.city).to.eq("McKenziehaven")
        })
    });

    it('test', () => {
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',
            {'title':"Test","body":"This is test body"}).then((resp)=>{
            cy.log(resp.body.title)
            cy.request('DELETE',`https://jsonplaceholder.typicode.com/posts/${resp.body.id}`)
        })
    });
});
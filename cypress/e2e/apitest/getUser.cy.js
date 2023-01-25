/// <refence types ="Cypress" />

describe('Get API User Test', () =>  {

    it('Get User',()=>{

        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer YOUR_ACCESS_TOKEN'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

    })
    it('Get User By ID',()=>{

        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/286',
            headers : {
                'Authorization' : 'Bearer YOUR_ACCESS_TOKEN'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(286)
            expect(res.body.name).to.include('Dipesh')
            expect(res.body.status).to.eq('active')
            
        })

    })

})
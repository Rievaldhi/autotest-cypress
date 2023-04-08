// function for generate random string, use it if needed
function randomString(length) {
    var result           = '';
    var characters       = 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

describe ('All API AutomationExercise',()=>{
    const baseUrl = 'https://automationexercise.com/api'


    it ('GET All Product List', ()=>{
        cy.request({
            method : 'GET',
            url : baseUrl+'/productsList'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.not.empty
        })
    })

    it ('POST All Product List', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/productsList'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 405, "message": "This request method is not supported."}')
        })
    })

    it ('GET All Brands List', ()=>{
        cy.request({
            method : 'GET',
            url : baseUrl+'/brandsList'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.not.empty
        })
    })

    it ('PUT All Brands List', ()=>{
        cy.request({
            method : 'PUT',
            url : baseUrl+'/brandsList'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 405, "message": "This request method is not supported."}')
        })
    })

    it ('POST Search Product', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/searchProduct',
            body : {
                "search_product" : "top" 
            }
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.not.empty
        })
    })

    it ('POST Search Product Without Parameter', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/searchProduct'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 400, "message": "Bad request, search_product parameter is missing in POST request."}')
        })
    })

    it ('POST Login With Valid Details', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/verifyLogin',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                email : "asdzzz@asdzzz.com",
                password : "1234"
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 200, "message": "User exists!"}')
        })
    })

    it ('POST Login With Empty Credential', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/verifyLogin',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                email : "",
                password : ""
            }
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.contain( {responseCode : 400, message : "Bad request, email or password parameter is missing in POST request."})
        })
    })

    it ('DELETE to Verify Login Method', ()=>{
        cy.request({
            method : 'DELETE',
            url : baseUrl+'/verifyLogin',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                email : "asdzzz@asdzzz.com",
                password : "123456"
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 405, "message": "This request method is not supported."}')

        })
    })

    it ('POST to Verify Login With Invalid Credentials', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/verifyLogin',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                email : "asdzzz@asdzzz.com",
                password : "123456"
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 404, "message": "User not found!"}')
        })
    })

    it ('POST to Register New User Account', ()=>{
        cy.request({
            method : 'POST',
            url : baseUrl+'/createAccount',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                name : "testt-name",
                email : "testt-1@email.com",
                // use it for create and delete account in one flow
                // email : "testt-"+ randomString(2) +"@email.com",
                password : "123456",
                title : "Miss",
                birth_date : "20",
                birth_month : "June",
                birth_year : "1990",
                firstname : "Leo",
                lastname : "Virgo",
                company : "big for",
                address1 : "anywhere",
                address2 : "anytime",
                country : "japan",
                zipcode : "022",
                state : "japan",
                city : "shibuya",
                mobile_number : "022356789790",
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 201, "message": "User created!"}')
        })
    })

    it ('PUT to Update Existing User Account', ()=>{
        cy.request({
            method : 'PUT',
            url : baseUrl+'/updateAccount',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                name : "testt-name-updated",
                email : "testt-1@email.com",
                // use it for create and delete account in one flow
                // email : "testt-"+ randomString(2) +"@email.com",
                password : "123456",
                title : "Miss",
                birth_date : "20",
                birth_month : "June",
                birth_year : "1990",
                firstname : "Leo",
                lastname : "Virgo",
                company : "big for-updated",
                address1 : "anywhere-updated",
                address2 : "anytime-updated",
                country : "japan-updated",
                zipcode : "022",
                state : "japan",
                city : "shibuya-updated",
                mobile_number : "022356789790",
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 200, "message": "User updated!"}')
        })
    })

    // not clear endpoint
    // it ('GET User Account Details By Email', ()=>{
    //     cy.request({
    //         method : 'GET',
    //         url : baseUrl+'/getUserDetailByEmail',
    //         headers : {
    //             'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
    //             'connection' : 'keep-alive',
    //             'accept' : 'text/html',
    //             "content-type": "application/json; charset=utf-8",
    //         },
    //         body : {
    //             email : "testt-1@email.com",
    //         },
    //         form : true
    //     }).then((resp) =>{
    //         expect(resp.status).to.eq(200)
    //         expect(resp.body).to.not.empty
    //     })
    // })
    
    it ('DELETE Method to Delete User Account', ()=>{
        cy.request({
            method : 'DELETE',
            url : baseUrl+'/deleteAccount',
            headers : {
                'authorization' : 'Bearer 876b93d180be55c3c7434db4cfc04023b959030b33cf1c2854d84cf86772f69d',
                'connection' : 'keep-alive',
                'accept' : 'text/html',
                "content-type": "application/json; charset=utf-8",
            },
            body : {
                email : "testt-1@email.com",
                password : "123456"
            },
            form : true
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eq('{"responseCode": 200, "message": "Account deleted!"}')
        })
    })


})
describe('API in Restful-booker web url', function(){

    it ('GET All Booking id', function(){

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
        })
        //     .then(function(response){
        //     expect(response.body).have.property('url');
        // });
            .should((response), function {
                cy.log(JSON.stringify(response.body))
            })

    });

});
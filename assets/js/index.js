


$("#add_user").submit(function(event){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "User's data Inserted Successfully!",
        showConfirmButton: false,
        timer: 2500
      })
})

// Handling form submission with id "update_user"
$("#update_user").submit(function(event){

    //Preventing the default form submision behavior
    event.preventDefault();

    // Serializing form data into an array
    var unindexed_array = $(this).serializeArray();
    var data = {}

    // Converting the serialized array into an object : 
    $.map(unindexed_array, function(n, i){
        //foreach element 'n' a new key-value pair is added to the 'data' object
        data[n['name']] = n['value']
    })


    //Creating/Constructing the AJAX request object
    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,//API endpoint URL
        "method" : "PUT", 
        "data" : data // data to be sent in the request body
    }

    //Making the AJAX request
    $.ajax(request).done(function(response){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "User's data Updated Successfully!",
            showConfirmButton: false,
            timer: 1500
        })
    })

})

if(window.location.pathname == "/dashboard"){

    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id =  $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                "User's data has been deleted.",
                'success'
              )
              $.ajax(request).done;
              location.reload();

            }
          })
    })
}
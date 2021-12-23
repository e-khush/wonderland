
let input=prompt("what would you like to do?")
const todo=[]
while(input!=='quit')
{
	if (input== 'list')
	{ 
		if(!todo.length)
			console.log("your list is empty")

		for(let i=0;i<todo.length;i++)	
			console.log(todo[i])    
	}
	else if (input== 'add')
	{ 
		input=prompt("what would you like to insert?")
		todo.push(input)
		console.log(`"${input}" added to the list `)    
	}
	else if (input== 'delete')
	{ 
		input=prompt("which index would you like to remove?")
		input=todo.splice(input,1)
		console.log(`"${input}" is removed from  the list `)    
	}
input=prompt("what would you like to do?")
}
 console.log("You quit ")

// <!DOCTYPE html>
// <html>
//     <body>ABC
//     <script>
//         const cleanNames = function(arr){
//             const out_arr=[]
//         arr.forEach(function (el)
//         {
//             out_arr.push(el.trim())
//         })
//         console.log(out_arr)
//         }
//         cleanNames(["  abc", "  cde"])
//     </script>
//     </body>
// </html>
function Greet(props){
console.log(props);
return(
<div>
    
<p>Welcome {props.nameFirst} {props.nameLast} </p>

</div>
);

}
export default Greet
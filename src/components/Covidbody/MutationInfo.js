export function MutationInfo({mutationEntry}){

  const {name, description, mutations, } = mutationEntry

  return (
    <div>
      
      <h1 className="">{name}</h1>
      <p className="">{mutations}</p>
      <p className="">{description}</p>
    </div>
    
  )
}

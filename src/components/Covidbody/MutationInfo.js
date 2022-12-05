export function MutationInfo({mutationEntry}){

  const {variant,who, description, mutations, works_cited, Link, title,} = mutationEntry

  return (
    <div>
      <h3 className="">{variant}</h3>
      <h1 className="">{title}</h1>
      <p className="">{mutations}</p>
      <p className="">{description}</p>
      <p className="">{works_cited}</p>
      <p className="">{Link}</p>
      <p className="">{who}</p>
    </div>
    
  )
}
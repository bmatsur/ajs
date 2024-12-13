export type ProfileProps = {
    name2: string
}

export const  Profile = ({name2}: ProfileProps) => {
  return (
    <div>Private Profile Component. Name is {name2}</div>
  )
}


export const GameList = styled.div`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`

export const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
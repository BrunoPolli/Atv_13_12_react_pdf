const user = {
  name: 'Bruno Fernandes Polli',
  email: '20200000062@alunos.ifpr.edu.br',
  group: 'TADS - 2020'
}

const Home = () => {
  return(
    <div style={{margin: 10}}>
      <h1>Home</h1>
      <div style={{marginTop: 15}}>
        <h2>Aluno: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Turma: {user.group}</h2>
      </div>
    </div>
  )
}

export default Home;
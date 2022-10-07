const { Octokit } = require("@octokit/core");

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
async function gh(){
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_KEY
      })
      
      const portfolioData = await octokit.request('GET /repos/{owner}/{repo}/languages', {
        owner: '1pete3',
        repo: 'Portfolio'
      })
console.log(portfolioData)
}
const Github = () =>{
gh();

return(<div>hi</div>)
}
export default Github;
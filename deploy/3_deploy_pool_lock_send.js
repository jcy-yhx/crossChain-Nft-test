module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const { deploy, log } = deployments;
    log("NFTPoolLockAndRelease contract is deploying")

    const CCIPSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const CCIPsimulator = await ethers.getContractAt("CCIPLocalSimulator",CCIPSimulatorDeployment.address)
    const CCIPConfig = await CCIPsimulator.configuration()
    const sourceChainRouter = CCIPConfig.sourceRouter_
    const linkToken = CCIPConfig.linkToken_
    const ntfDeployment = await deployments.get("MyToken")
    const ntfAddr = ntfDeployment.address

    await deploy("NFTPoolLockAndRelease",{
        contract: "NFTPoolLockAndRelease",
        from: firstAccount, 
        log: true,
        // address _router,address _link,address nftAddress
        args: [sourceChainRouter,linkToken,ntfAddr]
    })

    log("NFTPoolLockAndRelease deployed successfully")
}

module.exports.tags = ["sourcechain","all"]
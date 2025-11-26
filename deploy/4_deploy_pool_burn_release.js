module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const { deploy, log } = deployments;
    log("NftPoolBurnAndMint contract is deploying")

    const CCIPSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const CCIPsimulator = await ethers.getContractAt("CCIPLocalSimulator",CCIPSimulatorDeployment.address)
    const CCIPConfig = await CCIPsimulator.configuration()
    const destChainRouter = CCIPConfig.destinationRouter_
    const linkToken = CCIPConfig.linkToken_
    const wntfDeployment = await deployments.get("WrappedMyToken")
    const wntfAddr = wntfDeployment.address

    await deploy("NftPoolBurnAndMint",{
        contract: "NftPoolBurnAndMint",
        from: firstAccount, 
        log: true,
        // address _router,address _link,address nftAddress
        args: [destChainRouter,linkToken,wntfAddr]
    })

    log("NftPoolBurnAndMint deployed successfully")
}

module.exports.tags = ["destchain","all"]
module.exports = async({getNamedAccounts,deployments}) => {
    const {firstAccount} = await getNamedAccounts();
    const { deploy, log} = deployments;

    log("deploy CCIPLocalSimulator contract")
    await deploy("CCIPLocalSimulator",{
        contract: "CCIPLocalSimulator",
        from: firstAccount,
        log: true,
        args: []
    })
    log("CCIPLocalSimulator contract deployed successfully")
}
module.exports.tags = ["test","all"]
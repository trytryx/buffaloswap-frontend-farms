import { AbiItem } from 'web3-utils'
import busdABI from 'config/abi/busd.json'
import BigNumber from 'bignumber.js'
import { getWeb3 } from 'utils/web3'
import { getPresaleAddress, getBusdAddress } from '../../utils/addressHelpers'



const web3 = getWeb3()
const busdContract = new web3.eth.Contract(busdABI as unknown as AbiItem, getBusdAddress())

const fetchTokensLeft = async () => {
    const busdCollected = await busdContract.methods.balanceOf(getPresaleAddress()).call()
    const initialTokens = new BigNumber(10000000).multipliedBy(new BigNumber(10).pow(18))
    return initialTokens.minus(new BigNumber(busdCollected))
}

export default fetchTokensLeft

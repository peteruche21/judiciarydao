import { randomUUID } from "crypto";
import useWeb3Storage from "../../hooks/useWeb3Storage";

class FileDao {
  store: any;
  constructor() {
    this.store = useWeb3Storage();
  }
  async createProposal({ ...params }) {
    const proposalId = randomUUID();
    const proposal = JSON.stringify({
      proposalId: proposalId,
      createdBy: params.sender,
      createdAt: Date.now,
      blockNumber: params.block, // current block when this proposal was created
      previousHash: null,
      title: params.title,
      description: params.description,
    });
    const ready = new File([proposal], `${proposalId}.json`);
    const { cid, uri, info } = await this.store(ready);
    this.track({ cid, uri });
  }

  async vote({ ...params }) {
    // todo sign ethereum message before continuing.
    const voteId = randomUUID();
    const sender = params.sender;
    const vote = JSON.stringify({
      voteId: voteId,
      createdBy: sender,
      createdAt: Date.now,
      previousHash: await this.getLastItem,
      side: params.side, //* for or against represented by (1 || 0)
    });
    const ready = new File([vote], `${voteId}.json`);
    const { cid, uri, info } = await this.store(ready);
    await this.track({ cid, uri, sender });
  }

  async getLastItem() {
    //todo get the last vote from orbitDB and return its CID
  }
  async track({ ...params }) {
    //todo set the last Vote in orbitDB
  }
  async signTx() {
    return true;
  }
}

import ic from 'ic0';

export class ICP {
    constructor(){
      
    }
  
    async initialize(principal) {
        const ledger1 = ic('ryjl3-tyaaa-aaaaa-aaaba-cai');
        const result = await ledger1.call('name');

        console.log(result);
        console.log("rert");
        ledger3 = ic.local("bkyz2-fmaaa-aaaaa-qaaaq-cai");
        const result1 = await ledger3.call('name');
        console.log(result1);
        //ledger3.call('port.get_attestation', "fartinghouse");
        //alert(console.log(await this.ledger.call('name')));
     }
   
     static async create(principal) {
        const icp = new ICP();
        await icp.initialize(principal);
        return icp;
     }
  
  }
import fetch from "isomorphic-fetch";
import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
//import { AuthClient } from '@dfinity/auth-client';
import {Ed25519KeyIdentity} from '@dfinity/identity';
import { Secp256k1KeyIdentity } from "@dfinity/identity-secp256k1";
import { idlFactory } from "./idl";

export class ICP {
    constructor(){
      
    }
  
    //function will create new identity, agent and actor. then it will send is_attested call with defined cycles
    async attest(principal, cycles){
      console.log("attesting...");
      const identity = await this.createIdentity();
      const agent = new HttpAgent({
          identity: await identity,
          host: "https://ic0.app",
          fetch,
        });
      const actor = Actor.createActor(idlFactory, {
          agent,
          canisterId: "42bix-wqaaa-aaaak-ae6ya-cai" 
        });
      const result = await actor.is_attested(Principal.fromText(principal), cycles);
      return result;
    }

    //function will create icp update call on chain to set the url of the server.It will also increase the cycle limit
    async setUrl(url){
      console.log("setting url...");
      const result = await this.actor.set_url(url);
      return result;
    }


    async initialize(host, targetCanister) {
      //just for PoC, we will create new identity every time
      console.log("initializing...");
      const identity = await this.createIdentity();
      const agent = await new HttpAgent({
         identity: await identity,
         host: host,
         fetch,
       });
      await agent.fetchRootKey();
      const actor = await Actor.createActor(idlFactory, {
         agent,
         canisterId: targetCanister 
       });
       this.actor = actor;
       console.log("...completed");
     }
    
     //function will create new identity
      async createIdentity(){
        console.log("creating fresh identity...");
        const identity = await Ed25519KeyIdentity.generate();
        return identity;
      }

    //function will call the canister to get the url of the server(outcall server)
    async getUrl(){
          console.log("getting url...");
          const result = await this.actor.get_url();
          return result;
    }

    //function will call the canister with the given principal to get information if the principal is attested
    async isAttested(principal){
          console.log("getting info if attested...");
          const result = await this.actor.is_attested(Principal.fromText(principal));
          console.log("..response arrived");
          return result;
    }

    //function will call the canister with the given principal to get information about the attestation
    async getAttestationInfo(principal){
        console.log("getting attestation info...");
        const result = await this.actor.get_attestation(Principal.fromText(principal));
        console.log("getting attestation info is done...");
        return result;
    }
     

   //function will create a new public, private key pair, create principal id from public key, and return the principal id
  /* async createPrincipal(){
         const authClient = await AuthClient.create();
         const identity = await authClient.getIdentity();
         const principal = identity.getPrincipal();
         return principal;
   }*/

   //function will call the canister with the given principal  the call will be type of update, and the function will be get_attestation

   
     static async create(principal, targetCanister) {
        const icp = new ICP();
        await icp.initialize(principal, targetCanister);
        return icp;
     }
  }
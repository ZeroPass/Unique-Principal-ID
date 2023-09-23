export const idlFactory = ({ IDL }) => {
    const ActiveAuthnInfo = IDL.Record({
      'count' : IDL.Nat8,
      'last_authn' : IDL.Text,
    });
    const AuthnInfo = IDL.Record({
      'aa' : IDL.Opt(ActiveAuthnInfo),
      'country' : IDL.Text,
      'expires' : IDL.Text,
      'attestation' : IDL.Nat,
    });
    return IDL.Service({
      'get_attestation' : IDL.Func([IDL.Principal], [IDL.Opt(AuthnInfo)], []),
      'get_owner' : IDL.Func([], [IDL.Principal], ['query']),
      'get_url' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
      'is_attested' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'set_owner' : IDL.Func([IDL.Principal], [], []),
      'set_url' : IDL.Func([IDL.Text], [], []),
    });
  };
  export const init = ({ IDL }) => { return [IDL.Principal]; };
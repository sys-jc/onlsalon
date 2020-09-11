import gql from 'graphql-tag';

export const GetQuery1 = gql`
query get_owner($gid: String!) {
  tblowner(where: {googleid: {_eq: $gid}}) {
    dojoid
    dojoname
    sei
    mei
    birth
    mail
    zip
    region
    local
    street
    extend
    url
    tel
  }
}`;

export const InsertOwner = gql`
mutation ins_owner($object: tblowner_insert_input!) {
  insert_tblowner_one(object: $object) {
    dojoid
    googleid
  }
}`;

export const GetQuery2 = gql`
query get_dojo($did: String!) {
  tbldojo_by_pk(dojoid:$did) {
    dojoname
  }
}`;

export const GetQuery3 = gql`
query calc_memid($did: String!) {
  tblmember_aggregate(where: {dojoid: {_eq: $did}}) {
    aggregate {
      max {
        memid
      }
    }
  }
}`;

export const UpdateMember = gql`
mutation upd_member($_set: tblmember_set_input!, $id: Int!) {
  update_tblmember_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    googleid
  }
}`;

export const InsertMember = gql`
mutation ins_member($object: tblmember_insert_input!) {
  insert_tblmember_one(object: $object) {
    id
    googleid
  }
}`;

export const GetQuery4 = gql`
query get_dojown($gid: String!) {
  tbldojo(where: {googleid: {_eq: $gid}}) {
    dojoid
    dojoname
    sei
    mei
    mail
    tel
  }
}`;
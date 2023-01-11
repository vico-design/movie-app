import * as React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export interface IDetailProps {}

export default function Detail(props: IDetailProps) {
  const { id } = useParams<{ id: string }>();

  return <div>Detail page: {id}</div>;
}

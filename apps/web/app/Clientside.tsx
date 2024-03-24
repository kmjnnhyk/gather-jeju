'use client';

import { useEffect, useState } from 'react';
import { trpc } from './trpc';

export default function ClientSide() {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    trpc.hello.query({ name: 'jinhyeok' }).then((response) => { setGreeting(response); });
  }, []);

  return <div>{greeting}</div>;
}

import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router'

const Ctap = () => {
    // const router = useRouter()
    // const { pid } = router.query
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link href="/offerland/off?id=0">
            <button>Ctap1</button>
            </Link>
            <Link href="/offerland/off?id=1">
            <button>Ctap2</button>
            </Link>
            <Link href="/offerland/off?id=2">
            <button>Ctap3</button>
            </Link>
            <Link href="/offerland/off?id=3">
            <button>Ctap4</button>
            </Link>
            <Link href="/offerland/off?id=4">
            <button>Ctap5</button>
            </Link>
            <Link href="/offerland/off?id=5">
            <button>Ctap6</button>
            </Link>
        </div>
    );
};

export default Ctap;
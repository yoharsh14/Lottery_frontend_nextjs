import { useMoralis } from "react-moralis";
import { useEffect } from "react";
export function ManualHeader() {
    const { enableWeb3, isWeb3Enabled, account, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis();

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3();
            }
        }
    }, [isWeb3Enabled]);
    //automatically run on load
    // then, it'll run checking the value
    //with no dependency array: run anytime something re-renders
    // CAREFUL with this!! Because then you can get circular render
    //blank dependency array, run once on load

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${acccount}`);
            if (account == null) {
                window.localStorage.removeItem("connected");
                deactivateWeb3();
                console.log("Null Account Found");
            }
        });
    }, []);
    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3();
                        if (typeof window !== "undefined")
                            window.localStorage.setItem("connected", "inject");
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    connect
                </button>
            )}
        </div>
    );
}

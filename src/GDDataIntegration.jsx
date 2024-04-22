import * as React from 'react';

export default function GDDataIntegration() {
    React.useEffect(() => {
        if (TOKEN && WORKSPACE) {
            const getComponents = async () => {
                const moduleResponse = await import(
                    /*webpackIgnore: true*/ `https://${HOST}/components/${WORKSPACE}.js`
                    );

                const backendModuleResponse = await import(
                    /*webpackIgnore: true*/ (`https://${HOST}/components/tigerBackend.js`)
                    );

                // Extract necessary functions or objects from the imported modules
                const { setContext } = moduleResponse;
                const { default: factory, TigerTokenAuthProvider } = backendModuleResponse;
                // Create backend and set context
                const backend = factory()
                    .onHostname(`https://${HOST}`)
                    .withAuthentication(new TigerTokenAuthProvider(TOKEN));

                setContext({
                    backend,
                    WORKSPACE,
                });
            };

            getComponents();
        }
    }, [TOKEN, WORKSPACE]);

    return null;
}

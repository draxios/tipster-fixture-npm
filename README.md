# tipster-fixture-npm

Throwaway fixture repo used to verify [tipster](https://github.com/bogware/tipster)'s live
remediation loop end-to-end. It intentionally pins a **vulnerable** `[email protected]` so tipster
can detect the CVEs, open a fix PR, run the test suite, rescan to confirm the fix, and (on approval)
merge. Safe to delete.

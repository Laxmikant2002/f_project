import { Button, Typography, CircularProgress } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const ConnectWallet = ({ onConnect, connecting }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      gap: '2rem'
    }}>
      <HowToVoteIcon style={{ fontSize: 64, color: '#4a148c' }} />
      <Typography variant="h4" gutterBottom>
        Connect Your Wallet
      </Typography>
      <Typography variant="body1" paragraph>
        Please connect your MetaMask wallet to continue
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onConnect}
        disabled={connecting}
        startIcon={connecting ? <CircularProgress size={20} /> : null}
      >
        {connecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    </div>
  );
};

export default ConnectWallet;
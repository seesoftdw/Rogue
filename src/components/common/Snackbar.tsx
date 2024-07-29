import React from 'react';
import { Snackbar, Alert, AlertProps } from '@mui/material';
import { CheckCircleOutline, ErrorOutline, InfoOutlined, WarningAmberOutlined } from '@mui/icons-material';

interface SnackbarProps {
    open: boolean;
    message: string;
    severity: AlertProps['severity'];
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const iconMapping: Record<'success' | 'error' | 'info' | 'warning', React.ReactElement> = {
    success: <CheckCircleOutline sx={{ color: 'red' }} />,
    error: <ErrorOutline sx={{ color: 'red' }} />,
    info: <InfoOutlined sx={{ color: 'red' }} />,
    warning: <WarningAmberOutlined sx={{ color: 'red' }} />,
};

const GenericSnackbar: React.FC<SnackbarProps> = ({ open, message, severity = 'info', handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                icon={iconMapping[severity]}
                sx={{
                    background: 'rgba(255,255,255,0.8)',
                    color: 'red',
                    borderRadius:'10px'
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default GenericSnackbar;

# Getting Started

## What is Guardline?

Guardline is a wrapper around the WireGuard cli that manages and syncs your VPN configurations from a centeral dashboard.

It consists of two main parts:
- A beautiful web-based dashboard
- A CLI tool that you install on your devices

The CLI tool syncs up with our databse when running and get pushed real-time updates about the state/configuration
of your network. If a new device is added as a peer from the dashboard, the CLI tool will automagically update the underlying
WireGuard config and refresh the newtwork interface.

**Guardline keeps your network and all devices up to date, connected and secure.**

## Setup

### Install the CLI tool

First install the Guardline CLI tool. Open up your favorite terminal and run:

```bash
curl https://cli.guardline.app/apt/install.sh | sh
```

### Log in

The next step is to log into your Guardline account. If you haven't made an account yet, [sign up](https://guardline.app/early-access).

If your terminal is able to open a browser window, simply run:

```bash
guardline login
```

Your terminal should open a new browser window where a new API key will be created and sent back to the terminal. The CLI will then save this
API key on your machine and use it for all subsequent communication to the Guardline API.

<Alert type="warning">
  <p>
    If your device isn't able to launch a browser, you will need to
    <a href="/">manually create an API key</a>
    to log in.
  </p>
</Alert>

## Create a network

A network is a way to seperate devices in your account. Only devices that are on the same network will be able to connect to each other. Think
of a network like your own private internet.

Create a network [on the guardline dashboard](https://guardline.app/account/networks) or via the CLI:

```bash
guardline network:create
```

## Register your device

The next step is to register your device on the network. Run the following command:

```bash
guardline device:register
```

This will prompt you to give your device a name and then add your device to your network.
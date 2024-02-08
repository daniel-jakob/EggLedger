# Use the official Go image to create a build artifact.
# This is based on Debian and sets the GOPATH to /go.
# https://hub.docker.com/_/golang
FROM golang:1.21

# Install protobuf compiler
RUN apt-get update && apt-get install -y protobuf-compiler

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install Yarn
RUN npm install --global yarn

# Install dos2unix
RUN apt-get install -y dos2unix

# Copy local code to the container image.
WORKDIR /app

# Copy Go Modules manifests
COPY go.* ./
RUN go mod download

# Copy and build necessary dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy local code to the container image.
COPY . ./

RUN yarn install --frozen-lockfile

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

# Build the command inside the container.
RUN make dist-linux

# Run the web service on container startup.
CMD ["/app/server"]

# Cleanup apt cache to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
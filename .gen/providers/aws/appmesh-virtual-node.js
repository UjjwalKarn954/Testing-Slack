"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AppmeshVirtualNode = void 0;
var cdktf = require("cdktf");
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform)(struct.trust)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform)(struct.validation)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform)(struct.tls)
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName),
        client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform)(struct.clientPolicy)
    };
}
function appmeshVirtualNodeSpecBackendToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct.virtualService)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct.trust)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct.validation)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform)(struct.tls)
    };
}
function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform)(struct.clientPolicy)
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests)
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests)
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests)
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections)
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform)(struct.http2),
        tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform)(struct.tcp)
    };
}
function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval_millis: cdktf.numberToTerraform(struct.intervalMillis),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout_millis: cdktf.numberToTerraform(struct.timeoutMillis),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
    };
}
function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_ejection_percent: cdktf.numberToTerraform(struct.maxEjectionPercent),
        max_server_errors: cdktf.numberToTerraform(struct.maxServerErrors),
        base_ejection_duration: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform)(struct.baseEjectionDuration),
        interval: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform)(struct.interval)
    };
}
function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform)(struct.idle)
    };
}
function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform)(struct.http2),
        tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform)(struct.tcp)
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn)
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform)(struct.trust)
    };
}
function appmeshVirtualNodeSpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationToTerraform)(struct.validation)
    };
}
function appmeshVirtualNodeSpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_pool: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolToTerraform)(struct.connectionPool),
        health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct.healthCheck),
        outlier_detection: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform)(struct.outlierDetection),
        port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct.portMapping),
        timeout: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutToTerraform)(struct.timeout),
        tls: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsToTerraform)(struct.tls)
    };
}
function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path)
    };
}
function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform)(struct.file)
    };
}
function appmeshVirtualNodeSpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_log: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogToTerraform)(struct.accessLog)
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct.attributes),
        namespace_name: cdktf.stringToTerraform(struct.namespaceName),
        service_name: cdktf.stringToTerraform(struct.serviceName)
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname)
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_cloud_map: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform)(struct.awsCloudMap),
        dns: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform)(struct.dns)
    };
}
function appmeshVirtualNodeSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct.backend),
        backend_defaults: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsToTerraform)(struct.backendDefaults),
        listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform)(struct.listener),
        logging: cdktf.listMapper(appmeshVirtualNodeSpecLoggingToTerraform)(struct.logging),
        service_discovery: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryToTerraform)(struct.serviceDiscovery)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
*/
var AppmeshVirtualNode = /** @class */ (function (_super) {
    __extends(AppmeshVirtualNode, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualNodeConfig
    */
    function AppmeshVirtualNode(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_node',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._meshName = config.meshName;
        _this._meshOwner = config.meshOwner;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._spec = config.spec;
        return _this;
    }
    Object.defineProperty(AppmeshVirtualNode.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualNode.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshVirtualNode.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualNode.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshVirtualNode.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualNode.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshVirtualNode.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualNode.prototype, "specInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spec;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppmeshVirtualNode.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshVirtualNode.tfResourceType = "aws_appmesh_virtual_node";
    return AppmeshVirtualNode;
}(cdktf.TerraformResource));
exports.AppmeshVirtualNode = AppmeshVirtualNode;

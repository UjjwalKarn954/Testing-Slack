"use strict";
// https://www.terraform.io/docs/providers/aws/r/msk_cluster.html
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
exports.MskCluster = void 0;
var cdktf = require("cdktf");
function mskClusterBrokerNodeGroupInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        az_distribution: cdktf.stringToTerraform(struct.azDistribution),
        client_subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.clientSubnets),
        ebs_volume_size: cdktf.numberToTerraform(struct.ebsVolumeSize),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups)
    };
}
function mskClusterClientAuthenticationSaslToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iam: cdktf.booleanToTerraform(struct.iam),
        scram: cdktf.booleanToTerraform(struct.scram)
    };
}
function mskClusterClientAuthenticationTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns)
    };
}
function mskClusterClientAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sasl: cdktf.listMapper(mskClusterClientAuthenticationSaslToTerraform)(struct.sasl),
        tls: cdktf.listMapper(mskClusterClientAuthenticationTlsToTerraform)(struct.tls)
    };
}
function mskClusterConfigurationInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        revision: cdktf.numberToTerraform(struct.revision)
    };
}
function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_broker: cdktf.stringToTerraform(struct.clientBroker),
        in_cluster: cdktf.booleanToTerraform(struct.inCluster)
    };
}
function mskClusterEncryptionInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_at_rest_kms_key_arn: cdktf.stringToTerraform(struct.encryptionAtRestKmsKeyArn),
        encryption_in_transit: cdktf.listMapper(mskClusterEncryptionInfoEncryptionInTransitToTerraform)(struct.encryptionInTransit)
    };
}
function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group: cdktf.stringToTerraform(struct.logGroup)
    };
}
function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delivery_stream: cdktf.stringToTerraform(struct.deliveryStream),
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function mskClusterLoggingInfoBrokerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform)(struct.cloudwatchLogs),
        firehose: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsFirehoseToTerraform)(struct.firehose),
        s3: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsS3ToTerraform)(struct.s3)
    };
}
function mskClusterLoggingInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        broker_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsToTerraform)(struct.brokerLogs)
    };
}
function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled_in_broker: cdktf.booleanToTerraform(struct.enabledInBroker)
    };
}
function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled_in_broker: cdktf.booleanToTerraform(struct.enabledInBroker)
    };
}
function mskClusterOpenMonitoringPrometheusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        jmx_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusJmxExporterToTerraform)(struct.jmxExporter),
        node_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusNodeExporterToTerraform)(struct.nodeExporter)
    };
}
function mskClusterOpenMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prometheus: cdktf.listMapper(mskClusterOpenMonitoringPrometheusToTerraform)(struct.prometheus)
    };
}
function mskClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster}
*/
var MskCluster = /** @class */ (function (_super) {
    __extends(MskCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskClusterConfig
    */
    function MskCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        _this._enhancedMonitoring = config.enhancedMonitoring;
        _this._kafkaVersion = config.kafkaVersion;
        _this._numberOfBrokerNodes = config.numberOfBrokerNodes;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._brokerNodeGroupInfo = config.brokerNodeGroupInfo;
        _this._clientAuthentication = config.clientAuthentication;
        _this._configurationInfo = config.configurationInfo;
        _this._encryptionInfo = config.encryptionInfo;
        _this._loggingInfo = config.loggingInfo;
        _this._openMonitoring = config.openMonitoring;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(MskCluster.prototype, "arn", {
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
    Object.defineProperty(MskCluster.prototype, "bootstrapBrokers", {
        // bootstrap_brokers - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "bootstrapBrokersSaslIam", {
        // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_sasl_iam');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "bootstrapBrokersSaslScram", {
        // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_sasl_scram');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "bootstrapBrokersTls", {
        // bootstrap_brokers_tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "currentVersion", {
        // current_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "enhancedMonitoring", {
        get: function () {
            return this.getStringAttribute('enhanced_monitoring');
        },
        set: function (value) {
            this._enhancedMonitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetEnhancedMonitoring = function () {
        this._enhancedMonitoring = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "enhancedMonitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enhancedMonitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "kafkaVersion", {
        get: function () {
            return this.getStringAttribute('kafka_version');
        },
        set: function (value) {
            this._kafkaVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "kafkaVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kafkaVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "numberOfBrokerNodes", {
        get: function () {
            return this.getNumberAttribute('number_of_broker_nodes');
        },
        set: function (value) {
            this._numberOfBrokerNodes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "numberOfBrokerNodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfBrokerNodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "zookeeperConnectString", {
        // zookeeper_connect_string - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zookeeper_connect_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "zookeeperConnectStringTls", {
        // zookeeper_connect_string_tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zookeeper_connect_string_tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "brokerNodeGroupInfo", {
        get: function () {
            return this.interpolationForAttribute('broker_node_group_info');
        },
        set: function (value) {
            this._brokerNodeGroupInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "brokerNodeGroupInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._brokerNodeGroupInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "clientAuthentication", {
        get: function () {
            return this.interpolationForAttribute('client_authentication');
        },
        set: function (value) {
            this._clientAuthentication = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetClientAuthentication = function () {
        this._clientAuthentication = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "clientAuthenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientAuthentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "configurationInfo", {
        get: function () {
            return this.interpolationForAttribute('configuration_info');
        },
        set: function (value) {
            this._configurationInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetConfigurationInfo = function () {
        this._configurationInfo = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "configurationInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "encryptionInfo", {
        get: function () {
            return this.interpolationForAttribute('encryption_info');
        },
        set: function (value) {
            this._encryptionInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetEncryptionInfo = function () {
        this._encryptionInfo = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "encryptionInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "loggingInfo", {
        get: function () {
            return this.interpolationForAttribute('logging_info');
        },
        set: function (value) {
            this._loggingInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetLoggingInfo = function () {
        this._loggingInfo = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "loggingInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "openMonitoring", {
        get: function () {
            return this.interpolationForAttribute('open_monitoring');
        },
        set: function (value) {
            this._openMonitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetOpenMonitoring = function () {
        this._openMonitoring = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "openMonitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._openMonitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    MskCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(MskCluster.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MskCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            enhanced_monitoring: cdktf.stringToTerraform(this._enhancedMonitoring),
            kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
            number_of_broker_nodes: cdktf.numberToTerraform(this._numberOfBrokerNodes),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            broker_node_group_info: cdktf.listMapper(mskClusterBrokerNodeGroupInfoToTerraform)(this._brokerNodeGroupInfo),
            client_authentication: cdktf.listMapper(mskClusterClientAuthenticationToTerraform)(this._clientAuthentication),
            configuration_info: cdktf.listMapper(mskClusterConfigurationInfoToTerraform)(this._configurationInfo),
            encryption_info: cdktf.listMapper(mskClusterEncryptionInfoToTerraform)(this._encryptionInfo),
            logging_info: cdktf.listMapper(mskClusterLoggingInfoToTerraform)(this._loggingInfo),
            open_monitoring: cdktf.listMapper(mskClusterOpenMonitoringToTerraform)(this._openMonitoring),
            timeouts: mskClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MskCluster.tfResourceType = "aws_msk_cluster";
    return MskCluster;
}(cdktf.TerraformResource));
exports.MskCluster = MskCluster;
